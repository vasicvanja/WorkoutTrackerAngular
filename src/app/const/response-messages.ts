export const ResponseMessages = {
    Create_success: (typeName: string) => `Successfully created an ${typeName}!`,
    Delete_success: (typeName: string, objectName: string,) => `Successfully deleted the ${typeName} ${objectName}.`,
    Sing_in_failure: "An error occurred while signing in. Please try again later.",
    Sing_up_failure: "An error occurred while signing up. Please try again later.",
    Delete_assurance: (object: string, name: string) => `Are you sure that you want to delete the ${object} ${name}`,
    Update_success: (typeName: string, objectName: string) => `Successfully updated the ${typeName} ${objectName}.`,
    Update_smtp_success: "Successfully updated the Smtp Settings.",
    Update_smtp_failure: "Failed to update the Smtp Settings. Please try again later.",
    Invalid_id: (objectName: string) => `Invalid ${objectName} Id`,
    Forgot_password_failure: "An error occurred while sending the forgot password email. Please try again later.",
    Forgot_password_success: "The email for password reset is successfully sent!",
    Password_successful_reset: "Password successfully changed!",
    Successfully_activate_user: "Successfully activated the user.",
    Successfully_deactivate_user: "Successfully deactivated the user.",
    Only_image_files_are_allowed: "Only image files are allowed.",
    File_size_exceeds_limit: "File size exceeds the 5MB limit."
}