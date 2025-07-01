/*
 * =====================================================================
 * Theme
 * =====================================================================
 * This file initializes the theme in the local storage
 */

import { writable } from 'svelte/store';

let initialTheme;

if (typeof window !== 'undefined') {
	initialTheme = localStorage.getItem('theme') || 'light';
} else {
	initialTheme = 'light';
}

export const theme = writable(initialTheme);

theme.subscribe((value) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('theme', value);
		document.documentElement.setAttribute('data-theme', value);
	}
});
