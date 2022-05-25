import { writable } from 'svelte/store'

export const days = writable(0)
export const hours = writable(0)
export const minutes = writable(0)
export const seconds = writable(0)
export const finished = writable(false)
