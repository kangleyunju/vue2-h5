export const indexRoute = [{
	path: 'index',
	name: 'index',
	component: () => import('@/views/home/page/index.vue'),
	meta: {
		title: '��ҳ'
	}
}, {
	path: 'user',
	name: 'indexUser',
	component: () => import('@/views/home/page/user.vue'),
	meta: {
		title: '�ҵ�'
	}
}]