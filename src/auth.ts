import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "$env/static/private";
import { SvelteKitAuth } from "@auth/sveltekit";
import { D1Adapter } from '@auth/d1-adapter';
import Google from "@auth/sveltekit/providers/google";

export const { handle, signIn, signOut } = SvelteKitAuth({
  debug: true,
  adapter: D1Adapter(event.platform?.env.d1);
	providers: [
		Google({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
		}),
	],
});
