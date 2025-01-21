/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly DISCORD_WEBHOOK: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}