module.exports = {
    // NON TRANSLATABLE
    DEMO_PATH: '/docs/demo',
    GUIDE_PATH: '/docs/guide',
    API_PATH: '/docs/guide2',
    DEVELOPER_PATH: '/docs',
    // END NON TRANSLATABLE

    invalid_key: 'Invalid api key',
    update_key: 'Update API key',
    key_modal_description: 'This tool needs a Watson Visual Recognition API key.',
    sign_up: 'Sign up for bluemix to get your free key',
    log_out: 'Log out',
    save_key: 'Save key',
    mb100_error: 'Size limit (100MB) exceeded',
    invalid_file_error: 'Invalid file (must be .zip)',
    class_name: 'Class name',
    drag_zip: 'Drag .zip here to train class',
    choose_file: 'choose your file',
    negatives_tooltip: 'Negative examples are not used to create a class within the created classifier, but does define what the new classifier is not. The compressed file should contain images that do not depict the subject of any of the positive examples.',
    negative_class: 'Negative',
    optional: '(Optional)',
    mb2_error: 'Image size limit (2MB) exceeded',
    invalid_image_error: 'Invalid image file (must be .jpg or .png)',
    faces_error: 'No faces found',
    unknown_error: 'Unknown error',
    drag_image: 'Drag images here to classify them',
    choose_image: 'choose your files',
    create_classifier: 'Create classifier',
    visual_recognition_tool: 'Visual Recognition Tool',
    key: '🔑',
    api_key: 'API Key',
    update_key_button: 'Update key',
    classifier_general: 'Default',
    classifier_food: 'Food',
    classifier_face: 'Face Detection',
    status_ready: 'ready',
    status_training: 'training',
    status_retraining: 'retraining',
    documention: 'Documentation',

    // Create Classifier
    classifier_name_required_error: 'Classifier name is required',
    invalid_chars_error: 'Invalid characters: ',
    conflicting_class_name_error: 'Multiple classes have the same name.',
    mb250_error: 'The service accepts a maximum of 256 MB per training call.',
    add_class_error: 'Add at least one more class.',
    add_neg_or_class_error: 'Add another class, or supply negative examples.',
    no_classes_error: 'You need a minimum of 2 classes.',
    generic_error: 'An error occurred while processing your request.',
    create_classifier_title: 'Create a new classifier',
    create_classifier_description: 'Creating a custom classifier will allow you to identify highly specialized subject matter. You can train it with your own images to create a model that is tailored to fit your unique use case.',
    update_classifier_description: 'You can update an existing classifier by adding new classes, or by adding new images to existing classes. You must supply at least one compressed file, with additional positive or negative examples.',
    classifier_name: 'Classifier name',
    classes: 'Classes',
    classifier_requirements: 'Upload at least 2 classes, each in a zipped file with at least 10 photos.',
    add_class: 'Add class',
    cancel: 'Cancel',
    create: 'Create',
    creating_classifier: 'Creating classifier',

    // Drop button
    uploading: 'Uploading ',
    or: 'Or ',

    // Drop Down
    api_reference: 'API reference',
    update: 'Update',
    delete: 'Delete',

    // Progress Modal
    progress_modal_description: 'This may take several minutes to complete.',

    //Result List
    result_tooltip: 'This number does not represent a percentage of accuracy, but instead indicates Watson’s confidence.',
    improve_score: 'Improve this score',

    // Update Classifier
    modify_class: 'You must modify or add at least one class.',
    update_classifier: 'Update classifier',
    updating_classifier: 'Updating classifier',
}
