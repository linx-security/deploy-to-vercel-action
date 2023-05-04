const cache = require('@actions/cache')

const init = () => {
	if (!cache.isFeatureAvailable()) {
		throw new Error('Cache is not available')
	}

	const restore = async (paths, key, restoreKeys) => {
		return await cache.restoreCache(paths, key, restoreKeys)
	}

	const save = async (paths, key) => {
		return await cache.saveCache(paths, key)
	}

	return {
		restore,
		save
	}
}

module.exports = {
	init
}