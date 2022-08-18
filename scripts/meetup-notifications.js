/**
 * This bookmarklet unsubscribe to the notifications I don't want to receive
 * from most meetups since I'm a member of multiple ones around the world, and
 * it doesn't make sense to receive all the notifications when I'm not there.
 *
 * You need to be on the page
 * https://www.meetup.com/account/comm/SLUG-OF-YOUR-MEETUP
**/

javascript:(function(){
	const toggles = [
		'event_announce', //New event announcements
		'event_reminder', //Event reminders
		'post_event_rating', //Event rating requests
		'org_event_broadcast', //Event updates from organizers
		'org_broadcast' //Announcement to members about the group
	];

	toggles.forEach(function (toggle) {
		const elem = document.querySelector(`#${toggle}`);
		elem.checked ? elem.click() : null;
	});
})();
