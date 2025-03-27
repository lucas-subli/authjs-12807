<script lang="ts">
	import { SignOut } from '@auth/sveltekit/components';

	let { data } = $props();
</script>

<h1>Member only page</h1>

<p>Your session data:</p>

<code>
	<pre>
    {JSON.stringify(data.session, null, 4)}
  </pre>
</code>

<SignOut />
