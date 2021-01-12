export const FormGroupChatService = {
	validate: (values) => {
		const errors = {}

		if (!values.groupName) {
			errors.groupName = 'Group Name is required!'
		}

		return errors
	}
}
