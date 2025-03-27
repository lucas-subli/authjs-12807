import { AUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';
import { D1Adapter } from '@auth/d1-adapter';
import { SvelteKitAuth, type SvelteKitAuthConfig } from '@auth/sveltekit';
import Google from '@auth/sveltekit/providers/google';

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
	const adapter = D1Adapter(event.platform?.env.d1);

	const authOptions: SvelteKitAuthConfig = {
		adapter: adapter,
		secret: AUTH_SECRET,
		trustHost: true,
		providers: [
			Google({
				clientId: GOOGLE_CLIENT_ID,
				clientSecret: GOOGLE_CLIENT_SECRET,
				
				// ISSUE: With the profile function commented the second login (login, logout, login again) will fail
				// Will fail with an error OAuthAccountNotLinked
				// Because it is not mapping the profile SUB to the right place causing the system to think it is a new connection

				// profile: async (profile) => {
				// 	return {
				// 		...profile,
				// 		id: profile.sub,
				// 		name: profile.name,
				// 		email: profile.email,
				// 		image: profile.picture,
				// 	};
				// },

				// ISSUE: The problem is -> The easier way to fix it is setting allowDangerousEmailAccountLinking to true, which causes vulnerabilities				
				// allowDangerousEmailAccountLinking: true,
			}),
		],
	};
	return authOptions;
});
