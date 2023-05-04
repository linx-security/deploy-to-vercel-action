const cache = require('@actions/cache')

const init = () => {
	if (!cache.isFeatureAvailable()) {
		throw new Error('Cache is not available')
	}

	const restore = async (paths, key, restoreKeys) => {
		const cacheKey = await cache.restoreCache(paths, key, restoreKeys)
		return cacheKey
	}

	const save = async (paths, key) => {
		await cache.saveCache(paths, key)
	}

	return {
		restore,
		save
	}
}

module.exports = {
	init
}