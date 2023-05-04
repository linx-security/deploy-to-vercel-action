const artifact = require('@actions/artifact')

const init = () => {
	const client = artifact.create()


	return {
		...client
	}
}

module.exports = {
	init
}