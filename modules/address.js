export async function getAddresses(context) {
	var url = "/api/auth/address/"
	let data = await context.$axios.$get(encodeURI(url))
	return data
}

export async function addAddress(context, address) {
	var url = "/api/auth/address/"
	let data = await context.$axios.$post(encodeURI(url), {
		"country": address.country,
		"city": address.city,
		"phone": address.phoneNumber,
		"postal_code": address.postalCode,
		"street_address": address.address,
	})
	return data
}

export async function deleteAdddress(context, address_id) {
	var url = "/api/auth/address/" + address_id + "/"
	let data = await context.$axios.$delete(encodeURI(url))
	return data
}