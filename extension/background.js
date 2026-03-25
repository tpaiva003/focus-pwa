// background.js — FOCUS: SGNL Extension Service Worker
// Handles OAuth via chrome.identity.launchWebAuthFlow

const CLIENT_ID = '1093598922846-a0aib49mg17nj8tp8n7asi8ph3vupbqi.apps.googleusercontent.com';
const REDIRECT_URI = `https://${chrome.runtime.id}.chromiumapp.org/`;
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.file';

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'login') {
    const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
    authUrl.searchParams.set('client_id', CLIENT_ID);
    authUrl.searchParams.set('response_type', 'token');
    authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
    authUrl.searchParams.set('scope', SCOPES);
    authUrl.searchParams.set('prompt', 'select_account');

    chrome.identity.launchWebAuthFlow(
      { url: authUrl.toString(), interactive: true },
      (redirectUrl) => {
        if (chrome.runtime.lastError || !redirectUrl) {
          sendResponse({ error: chrome.runtime.lastError?.message || 'Auth cancelled' });
          return;
        }
        const params = new URLSearchParams(new URL(redirectUrl).hash.slice(1));
        const token = params.get('access_token');
        const expiresIn = parseInt(params.get('expires_in') || '3300');
        if (!token) {
          sendResponse({ error: 'No token received' });
          return;
        }
        const expiry = Date.now() + (expiresIn - 300) * 1000;
        chrome.storage.local.set({
          focus_token: token,
          focus_token_expiry: expiry
        }, () => {
          sendResponse({ token, expiry });
        });
      }
    );
    return true; // keep channel open for async response
  }
});
