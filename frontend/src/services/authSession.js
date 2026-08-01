const SESSION_KEY = 'teamsync_session';

export function saveSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function getSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
  } catch {
    return null;
  }
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function apiErrorMessage(error) {
  const detail = error.response?.data?.detail;
  if (Array.isArray(detail)) return detail[0]?.msg || 'Please check the form and try again.';
  return detail || 'Unable to reach TeamSync AI. Please try again.';
}
