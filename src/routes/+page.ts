import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const layoutData = await parent();
	const session = layoutData.session;
	if (session?.user) {
		redirect(303, '/member');
	}

	return {};
};
