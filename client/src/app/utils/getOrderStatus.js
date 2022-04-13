export function getOrderStatus(status) {
	switch (status) {
		case 'pending':
			return { text: 'Ожидание отправки', color: 'warning' }

		case 'delivery':
			return { text: 'Ожидание доставки', color: 'info' }

		default:
			return { text: 'Доставлено', color: 'success' }
	}
}
