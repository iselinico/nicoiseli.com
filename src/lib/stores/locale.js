/*
 * =====================================================================
 * Locale
 * =====================================================================
 * This file initializes the language in the local storage
 */

import { register, init, locale } from 'svelte-i18n';

register('en', () => import('$lib/locales/en.json'));
register('de', () => import('$lib/locales/de.json'));

if (typeof window !== 'undefined') {
	const defaultLocale = 'en';
	const allowedLocales = ['en', 'de'];
	let savedLocale = localStorage.getItem('locale');

	if (!savedLocale || !allowedLocales.includes(savedLocale)) {
		savedLocale = defaultLocale;
		localStorage.setItem('locale', savedLocale);
	}

	locale.set(savedLocale);
}

init({
	fallbackLocale: 'en',
	initialLocale: typeof window !== 'undefined' ? localStorage.getItem('locale') : 'en'
});
