import i18next from 'i18next'
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'

var english = {
  invalid_key: 'Invalid credentials',
  update_key: 'Update credentials',
  key_modal_description: 'This tool needs Watson Visual Recognition credentials.',
  sign_up: 'Sign up for bluemix to get your free credentials',
  log_out: 'Log out',
  save_key: 'Save credentials',
  mb100_error: 'Size limit (100MB) exceeded',
  invalid_file_error: 'Invalid file (must be .zip)',
  class_name: 'Class name',
  drag_zip: 'Drag .zip here to train class',
  choose_file: 'choose your file',
  negatives_tooltip: 'Negative examples should depict what the classifier is not. This set should be visually similar images to the positive examples, but do include any positive images within this negative set. You do not provide a name for this Negative class.',
  negative_class: 'Negative',
  optional: '(Optional)',
  mb2_error: 'Image size limit (10MB) exceeded',
  invalid_image_error: 'Invalid image file (must be .jpg or .png)',
  unknown_error: 'Unknown error',
  drag_image: 'Drag images here to classify them',
  choose_image: 'choose your files',
  create_classifier: 'Create classifier',
  visual_recognition_tool: 'Visual Recognition Tool',
  key: 'User:',
  api_key: 'Username:Password',
  update_key_button: 'Update credentials',
  classifier_general: 'default',
  general: 'General',
  status_ready: 'ready',
  status_training: 'training',
  status_retraining: 'retraining',
  status_failed: 'failed',
  documention: 'Documentation',
  username: 'Username',
  password: 'Password',
  cancel: 'Cancel',
  ok: 'OK',

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
  create_classifier_description: 'Creating a custom classifier will allow you to identify highly specialized subject matter. A classifier is created from  a group of images trained by the Visual Recognition service to identify the subject matter of interest.',
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

var spanish = {
  invalid_key: 'Credenciales no válidas',
  update_key: 'Modificar credenciales',
  key_modal_description: 'Esta herramienta necesita credenciales de Watson Visual Recognition.',
  sign_up: 'Regístrese en bluemix para obtener sus credenciales gratis',
  log_out: 'Cerrar sesión',
  save_key: 'Guardar credenciales',
  mb100_error: 'Se ha superado el límite de tamaño (100 MB)',
  invalid_file_error: 'El archivo no es válido (debe ser .zip)',
  class_name: 'Nombre de clase',
  drag_zip: 'Arrastre el .zip aquí para la clase clase de entrenamiento',
  choose_file: 'elija el archivo',
  negatives_tooltip: 'Ejemplos negativos representan que el clasificador no lo es. Este conjunto debe ser visualmente similar a los ejemplos positivos pero no incluir imágenes positivas en él. No proporcione un nombre para esta clase Negativa.',
  negative_class: 'Negativo',
  optional: '(Opcional)',
  mb2_error: 'Se ha superado el límite de tamaño de imagen (10MB)',
  invalid_image_error: 'Archivo de imagen no válido (debe ser .jpg o .png)',
  unknown_error: 'Error desconocido',
  drag_image: 'Arrastre aquí las imágenes para clasificarlas',
  choose_image: 'elija los archivos',
  create_classifier: 'Crear clasificador',
  visual_recognition_tool: 'Visual Recognition Tool',
  key: 'Usuario:',
  api_key: 'NombreUsuario:Contraseña',
  update_key_button: 'Modificar credenciales',
  classifier_general: 'Predeterminado',
  general: 'General',
  status_ready: 'preparado',
  status_training: 'entrenamiento',
  status_retraining: 'nuevo entrenamiento',
  status_failed: 'Fallado',
  documention: 'Documentación',
  username: 'Nombre de usuario',
  password: 'Contraseña',
  cancel: 'Cancelar',
  ok: 'Aceptar',

  // Create Classifier
  classifier_name_required_error: 'Es necesario el nombre de clasificador',
  invalid_chars_error: 'Caracteres no válidos: ',
  conflicting_class_name_error: 'Varias clases tienen el mismo nombre.',
  mb250_error: 'El servicio acepta un máximo de 256 MB por llamada de entrenamiento.',
  add_class_error: 'Añada al menos una clase más.',
  add_neg_or_class_error: 'Añada otra clase o suministre ejemplos negativos.',
  no_classes_error: 'Necesita un mínimo de 2 clases.',
  generic_error: 'Se ha producido un error al procesar la solicitud.',
  create_classifier_title: 'Crear un clasificador nuevo',
  create_classifier_description: 'El crear un clasificador personalizado le permitirá identificar un tema especializado. Un clasificador se crea a partir de un grupo de imágenes por el servicio Visual Recognition, para identificar el interés del sujeto.',
  update_classifier_description: 'Puede actualizar un clasificador existente añadiendo clases o imágenes nuevas a las clases existentes. Debe suministrar al menos un archivo comprimido, con ejemplos adicionales positivos o negativos.',
  classifier_name: 'Nombre de clasificador',
  classes: 'Clases',
  classifier_requirements: 'Cargue al menos 2 clases, cada una en un archivo comprimido con al menos 10 fotografías.',
  add_class: 'Añadir clase',
  cancel: 'Cancelar',
  create: 'Crear',
  creating_classifier: 'Creando clasificador',

  // Drop button
  uploading: 'Cargando ',
  or: 'O ',

  // Drop Down
  api_reference: 'Referencia de API',
  update: 'Actualizar',
  delete: 'Suprimir',

  // Progress Modal
  progress_modal_description: 'Esto puede tardar varios minutos en completarse.',

  //Result List
  result_tooltip: 'Este número no representa un porcentaje de precisión, sino que en su lugar indica la confianza de Watson.',
  improve_score: 'Mejorar esta puntuación',

  // Update Classifier
  modify_class: 'Debe modificar o añadir al menos una clase.',
  update_classifier: 'Actualizar clasificador',
  updating_classifier: 'Actualizando clasificador'
}

var arabic = {
  invalid_key: 'مفتاح غير صحيح gواجهة تعامل برمجة التطبيق',
  update_key: 'تحديث مفتاح واجهة تعامل برمجة التطبيق',
  key_modal_description: 'تحتاج هذه الأداة الى مفتاح Watson Visual Recognition API.',
  sign_up: 'تسجيل المستخدم الى bluemix للحصول على مفتاحك المجاني',
  log_out: 'تسجيل الخروج',
  save_key: 'مفتاح الحفظ',
  mb100_error: 'تم تجاوز حد الحجم (100ميجابايت)',
  invalid_file_error: 'ملف غير صحيح (يجب أن يكون ‎.zip)',
  class_name: 'اسم الفئة',
  drag_zip: 'قم بسحب ‏.zip هنا لتدرب الفئة',
  choose_file: 'قم باختيار الملف الخاص بك',
  negatives_tooltip: 'لا يتم استخدام الأمثلة السالبة لتكوين فئة في المصنف الذي تم تكوينه، لكنها تقوم بتعريف ما لن يصبح عليه المصنف الجديد. يجب أن يتضمن الملف المضغوط صور لا تقوم بوصف موضوع أي أمثلة موجبة.',
  negative_class: 'سالب',
  optional: '(اختياري)',
  mb2_error: 'تجاوز حد حجم الصورة (2ميجابايت)',
  invalid_image_error: 'ملف صور غير صحيح (يجب أن يكون ‎.jpg أو ‎.png)',
  faces_error: 'لم يتم ايجاد أية وجوه',
  unknown_error: 'خطأ غير معروف',
  drag_image: 'سحب الصور الى هنا لتصنيفهم',
  choose_image: 'اختيار الملفات الخاصة بك',
  create_classifier: 'تكوين مصنف',
  visual_recognition_tool: 'أداة مرئية للتعرف',
  key: '🔑',
  api_key: 'مفتاح API',
  update_key_button: 'مفتاح التحديث',
  classifier_general: 'المفترض',
  general: 'عام',
  classifier_food: 'طعام',
  classifier_face: 'اكتشاف الوجوه',
  status_ready: 'جاهز للتشغيل',
  status_training: 'تدريب',
  status_retraining: 'اعادة التدريب',
  documention: 'المطبوعات الفنية',

  // Create Classifier
  classifier_name_required_error: 'مطلوب اسم المصنف',
  invalid_chars_error: 'حروف غير صحيحة: ',
  conflicting_class_name_error: 'يتوافر للفئات المتعددة نفس الاسم.',
  mb250_error: 'تقوم الخدمة بقبول بحد أقصى 256 ميجابايت لكل استدعاء تدريب.',
  add_class_error: 'قم باضافة فئة واحدة أخرى على الأقل.',
  add_neg_or_class_error: 'قم باضافة فئة أخرى، أو أدخل أمثلة سالبة.',
  no_classes_error: 'تحتاج  بحد أدنى 2 فئة.',
  generic_error: 'حدث خطأ أثناء تشغيل الطلب الخاص بك. ',
  create_classifier_title: 'تكوين مصنف جديد',
  create_classifier_description: 'ستسمح لك عملية تكوين مصنف مهيأ بتعريف الموضوعات المتخصصة للغاية. يمكنك تدريبه باستخدام الصور الخاصة بك لتكوين نموذج يتم تهيئته ليتناسب مع حالة الاستخدام المتفردة الخاصة بك.',
  update_classifier_description: 'يمكنك تحديث مصنف موجود بواسطة اضافة فئة جديدة، أو بواسطة اضافة صور جديدة لفئات موجودة. يجب أدخال ملف مضغوط واحد على الأقل، مع أمثلة اضافية موجبة أو سالبة.',
  classifier_name: 'اسم المصنف',
  classes: 'الفئات',
  classifier_requirements: 'قم بتحميل 2 فئة على الأقل، كلا منهما في ملف zip مع 10 صور على الأقل.',
  add_class: 'اضافة فئة',
  cancel: 'الغاء',
  create: 'تكوين',
  creating_classifier: 'تكوين مصنف',

  // Drop button
  uploading: 'تحميل ',
  or: 'أو ',

  // Drop Down
  api_reference: 'مرجع API',
  update: 'تحديث',
  delete: 'حذف',

  // Progress Modal
  progress_modal_description: 'قد يستغرق هذا عدة دقائق ليتم. ',

  //Result List
  result_tooltip: 'هذا الرقم لا يمثل نسبة مئوية من الدقة، ولكن بدلا من ذلك فانه يشير الى دقة Watson.',
  improve_score: 'تطوير مجموع الدرجات هذا',

  // Update Classifier
  modify_class: 'يجب تعديل أو اضافة فئة واحدة على الأقل.',
  update_classifier: 'تحديث المصنف',
  updating_classifier: 'تحديث المصنف'
}

var german = {
  invalid_key: 'Ungültige Berechtigungsnachweise',
  update_key: 'Berechtigungsnachweise aktualisieren',
  key_modal_description: 'Dieses Tool benötigt Berechtigungsnachweise für Watson Visual Recognition.',
  sign_up: 'Melden Sie sich bei Bluemix an, um kostenlose Berechtigungsnachweise zu erhalten',
  log_out: 'Abmelden',
  save_key: 'Berechtigungsnachweise speichern',
  mb100_error: 'Größenbegrenzung (100 MB) überschritten',
  invalid_file_error: 'Ungültige Datei (ZIP erforderlich)',
  class_name: 'Klassenname',
  drag_zip: 'Ziehen Sie die ZIP-Datei hierhin, um die Klasse zu trainieren',
  choose_file: 'wählen Sie die Datei',
  negatives_tooltip: 'Negative Beispiele sollen darstellen, worum es sich beim Klassifikationsmerkmal nicht handelt. Diese Gruppe muss aus Bildern bestehen, die denen der positiven Beispiele visuell ähneln. Fügen Sie dieser negativen Gruppe dennoch beliebige positive Bilder hinzu. Geben Sie für diese negative Klasse keinen Namen an.',
  negative_class: 'Negativ',
  optional: '(Optional)',
  mb2_error: 'Begrenzung der Bildgröße (10 MB) überschritten',
  invalid_image_error: 'Ungültige Bilddatei (JPG oder PNG erforderlich)',
  unknown_error: 'Unbekannter Fehler',
  drag_image: 'Ziehen Sie Bilder hierhin, um sie zu klassifizieren',
  choose_image: 'wählen Sie die Dateien',
  create_classifier: 'Erstellen Sie ein Klassifikationsmerkmal',
  visual_recognition_tool: 'Tool für die visuelle Erkennung',
  key: 'Benutzer:',
  api_key: 'Benutzername:Kennwort',
  update_key_button: 'Berechtigungsnachweise aktualisieren',
  classifier_general: 'Standard',
  general: 'Allgemein',
  status_ready: 'bereit',
  status_training: 'Training',
  status_retraining: 'Erneutes Training',
  status_failed: 'fehlgeschlagen',
  documention: 'Dokumentation',
  username: 'Benutzername',
  password: 'Kennwort',
  cancel: 'Abbrechen',
  ok: 'OK',

  // Create Classifier
  classifier_name_required_error: 'Name des Klassifikationsmerkmals ist erforderlich',
  invalid_chars_error: 'Ungültige Zeichen: ',
  conflicting_class_name_error: 'Mehrere Klassen besitzen denselben Namen.',
  mb250_error: 'Der Service akzeptiert höchstens 256 MB pro Trainingsaufruf.',
  add_class_error: 'Fügen Sie mindestens eine weitere Klasse hinzu.',
  add_neg_or_class_error: 'Fügen Sie eine andere Klasse hinzu oder stellen Sie negative Beispiele bereit.',
  no_classes_error: 'Sie benötigen mindestens 2 Klassen.',
  generic_error: 'Bei der Verarbeitung Ihrer Anfrage ist ein Fehler aufgetreten.',
  create_classifier_title: 'Erstellen Sie ein neues Klassifikationsmerkmal',
  create_classifier_description: 'Indem Sie ein benutzerdefiniertes Klassifikationsmerkmal erstellen, können Sie äußerst spezifische Inhalte angeben. Ein Klassifikationsmerkmal wird aus einer Gruppe von Bildern erstellt, die vom Service für die visuelle Erkennung trainiert werden, um den vorliegenden Inhalt zu ermitteln.',
  update_classifier_description: 'Durch das Hinzufügen neuer Klassen oder das Hinzufügen neuer Bilder zu vorhandenen Klassen können Sie ein vorhandenes Klassifikationsmerkmal aktualisieren. Sie müssen mindestens eine komprimierte Datei mit zusätzlichen positiven oder negativen Beispielen bereitstellen.',
  classifier_name: 'Name des Klassifikationsmerkmals',
  classes: 'Klassen',
  classifier_requirements: 'Laden Sie mindestens 2 Klassen hoch - jede in einer komprimierten Datei mit mindestens 10 Fotos.',
  add_class: 'Klasse hinzufügen',
  cancel: 'Abbrechen',
  create: 'Erstellen',
  creating_classifier: 'Klassifikationsmerkmal wird erstellt',

  // Drop button
  uploading: 'Upload wird durchgeführt ',
  or: 'Oder ',

  // Drop Down
  api_reference: 'API-Referenz',
  update: 'Aktualisierungen',
  delete: 'Löschen',

  // Progress Modal
  progress_modal_description: 'Dieser Vorgang kann einige Minuten dauern.',

  //Result List
  result_tooltip: 'Diese Zahl stellt keinen Prozentsatz für die Genauigkeit dar, sondern gibt die Konfidenz von Watson an.',
  improve_score: 'Diesen Wert verbessern',

  // Update Classifier
  modify_class: 'Sie müssen mindestens eine Klasse ändern oder hinzufügen.',
  update_classifier: 'Klassifikationsmerkmal aktualisieren',
  updating_classifier: 'Klassifikationsmerkmal wird aktualisiert'
}


var italian = {
  invalid_key: 'Credenziali non valide',
  update_key: 'Aggiorna credenziali',
  key_modal_description: 'Questo strumento necessita delle credenziali di riconoscimento visivo Watson.',
  sign_up: 'Eseguire la registrazione a bluemix per ottenere le credenziali gratuite',
  log_out: 'Disconnetti',
  save_key: 'Salva credenziali',
  mb100_error: 'Superato il limite di dimensione (100MB)',
  invalid_file_error: 'File non valido (deve essere .zip)',
  class_name: 'Nome classe',
  drag_zip: 'Trascinare il file .zip qui per addestrare la classe',
  choose_file: 'scegliere il file',
  negatives_tooltip: 'Gli esempi negativi definiscono quale non è il classificatore. Questo set deve essere visivamente simile alle immagini degli esempi positivi, ma includere tutte le immagini positive all\'interno di questo set negativo. Non è stato fornito un nome per questa classe negativa.',
  negative_class: 'Negativo',
  optional: '(Facoltativo)',
  mb2_error: 'Superato il limite di dimensione immagine (10MB)',
  invalid_image_error: 'File immagine non valido (deve essere .jpg o .png)',
  unknown_error: 'Errore sconosciuto',
  drag_image: 'Trascinare le immagini qui per classificarle',
  choose_image: 'scegliere i file',
  create_classifier: 'Crea classificatore',
  visual_recognition_tool: 'Strumento di riconoscimento visivo',
  key: 'Utente:',
  api_key: 'Nome utente:Password',
  update_key_button: 'Aggiorna credenziali',
  classifier_general: 'valore predefinito',
  general: 'Generale',
  status_ready: 'pronto',
  status_training: 'in addestramento',
  status_retraining: 'in riaddestramento',
  status_failed: 'non riuscito',
  documention: 'Documentazione',
  username: 'Nome utente',
  password: 'Password',
  cancel: 'Annulla',
  ok: 'OK',

  // Create Classifier
  classifier_name_required_error: 'È richiesto il nome classificatore',
  invalid_chars_error: 'Caratteri non validi: ',
  conflicting_class_name_error: 'Più classi hanno lo stesso nome.',
  mb250_error: 'Il servizio accetta un massimo di 256 MB per chiamata di addestramento.',
  add_class_error: 'Aggiungere almeno un\'altra classe.',
  add_neg_or_class_error: 'Aggiungere un\'altra classe o fornire esempi negativi.',
  no_classes_error: 'Occorre un minimo di 2 classi.',
  generic_error: 'Si è verificato un errore durante l\'elaborazione della richiesta.',
  create_classifier_title: 'Crea nuovo classificatore',
  create_classifier_description: 'La creazione di un classificatore personalizzato permetterà di identificare argomenti altamente specifici. Un classificatore è creato da un gruppo di immagini addestrate dal servizio di riconoscimento visivo per identificare l\'argomento interessato.',
  update_classifier_description: 'È possibile aggiornare un classificatore esistente aggiungendo nuove classi o nuove immagini a classi esistenti. È necessario fornire almeno un file compresso con ulteriori esempi positivi e negativi.',
  classifier_name: 'Nome classificatore',
  classes: 'Classi',
  classifier_requirements: 'Caricare almeno 2 classi, ognuna in un file .zip con almeno 10 foto.',
  add_class: 'Aggiungi classe',
  cancel: 'Annulla',
  create: 'Crea',
  creating_classifier: 'Creazione classificatore',

  // Drop button
  uploading: 'Caricamento ',
  or: 'Oppure ',

  // Drop Down
  api_reference: 'Riferimento API',
  update: 'Aggiorna',
  delete: 'Elimina',

  // Progress Modal
  progress_modal_description: 'Il completamento potrebbe richiedere diversi minuti.',

  //Result List
  result_tooltip: 'Questo numero non rappresenta una percentuale di precisione, ma indica invece la confidenza di Watson.',
  improve_score: 'Migliora questo punteggio',

  // Update Classifier
  modify_class: 'È necessario modificare o aggiungere almeno una classe.',
  update_classifier: 'Aggiorna classificatore',
  updating_classifier: 'Aggiornamento classificatore'
}

var japanese = {
  invalid_key: '無効な資格情報',
  update_key: '資格情報のアップデート',
  key_modal_description: 'このツールには Watson Visual Recognition の資格情報が必要です。',
  sign_up: 'Bluemix に登録して無料の資格情報を入手してください',
  log_out: 'ログアウト',
  save_key: '資格情報の保存',
  mb100_error: '保存制限 (100MB) を超えています',
  invalid_file_error: '無効なファイルです (.zip を使用してください)',
  class_name: 'クラス名',
  drag_zip: 'ここに .zip をドラッグしてクラスを作成するか、',
  choose_file: 'ファイルを選択してください',
  negatives_tooltip: '否定サンプルは種別を描写しないものにしてください。この否定セットは視覚的に肯定サンプルと同様の画像ですが、この否定セットには必ず肯定画像を含みます。この否定クラスには名前をつけないでください。',
  negative_class: '否定',
  optional: '(オプション)',
  mb2_error: 'イメージ・サイズ制限 (10MB) を超えています',
  invalid_image_error: '無効なイメージ・ファイルです (.jpg または .png を使用してください)',
  unknown_error: '不明なエラー',
  drag_image: 'ここにイメージをドラッグして分類します',
  choose_image: 'ファイルを選択してください',
  create_classifier: '種別の作成',
  visual_recognition_tool: 'Visual Recognition ツール',
  key: 'ユーザー:',
  api_key: 'ユーザー名:パスワード',
  update_key_button: '資格情報のアップデート',
  classifier_general: 'デフォルト',
  general: '一般',
  status_ready: '作動可能',
  status_training: 'トレーニング',
  status_retraining: 'リトレーニング',
  status_failed: '失敗',
  documention: '資料',
  username: 'ユーザー名',
  password: 'パスワード',
  cancel: 'キャンセル',
  ok: 'OK',

  // Create Classifier
  classifier_name_required_error: '種別名は必須です',
  invalid_chars_error: '無効文字があります: ',
  conflicting_class_name_error: '複数のクラスの名前が同じです。',
  mb250_error: 'サービスでは、トレーニング呼び出しあたり最大 256 MB を受け入れます。',
  add_class_error: '少なくとも後 1 つクラスを追加してください。',
  add_neg_or_class_error: '別のクラスを追加するか、否定サンプルを提供してください。',
  no_classes_error: '少なくとも 2 つのクラスが必要です。',
  generic_error: '要求の処理中にエラーが発生しました。',
  create_classifier_title: '新規種別を作成してください',
  create_classifier_description: 'カスタム種別を作成すると、非常に特殊な対象を識別できます。 種別は Visual Recognition サービスで作成された画像グループから作成され、関心のある対象を識別します。',
  update_classifier_description: '既存の種別を更新するために、新規クラスを追加するか、または既存のクラスに新規イメージを追加できます。 追加の肯定サンプルまたは否定サンプルが含まれた圧縮ファイルを、少なくとも 1 つ指定する必要があります。',
  classifier_name: '種別名',
  classes: 'クラス',
  classifier_requirements: '少なくとも 2 つのクラスをアップロードしてください。各クラスの zip ファイルには少なくとも 10 個の写真が含まれている必要があります。',
  add_class: 'クラスの追加',
  cancel: 'キャンセル',
  create: '作成',
  creating_classifier: '種別の作成中',

  // Drop button
  uploading: 'アップロード中 ',
  or: 'または ',

  // Drop Down
  api_reference: 'API リファレンス',
  update: '更新',
  delete: '削除',

  // Progress Modal
  progress_modal_description: 'これは完了までに数分かかる場合があります。',

  //Result List
  result_tooltip: 'この数値は正確度のパーセンテージではなく、Watson による信頼度を示しています。',
  improve_score: 'このスコアを改善する',

  // Update Classifier
  modify_class: '少なくとも 1 つのクラスを変更または追加してください。',
  update_classifier: '種別の更新',
  updating_classifier: '種別の更新中'
}

var korean = {
  invalid_key: '올바르지 않은 신임 정보',
  update_key: '신임 정보 업데이트',
  key_modal_description: '이 도구는 Watson Visual Recognition 신임 정보가 필수입니다.',
  sign_up: 'Bluemix에 등록하여 무료 신임 정보 가져오기',
  log_out: '로그아웃',
  save_key: '신임 정보 저장',
  mb100_error: '크기 한계(100MB)를 초과함',
  invalid_file_error: '올바르지 않은 파일(.zip이어야 함)',
  class_name: '클래스 이름',
  drag_zip: '클래스 훈련을 위해 여기로 .zip 끌어오기',
  choose_file: '파일 선택',
  negatives_tooltip: '부정 예제는 분류자가 무엇이 아닌지를 설명해야 합니다. 이 세트는 긍정 예제와 시각적으로 유사한 이미지여야 하지만 부정 세트 내에서 긍정 이미지를 포함해야 합니다. 이 부정 클래스에 대한 이름을 제공하지 않습니다.',
  negative_class: '부정',
  optional: '(선택사항)',
  mb2_error: '이미지 크기 한계(10MB)를 초과함',
  invalid_image_error: '올바르지 않은 이미지 파일(.jpg 또는 .png여야 함)',
  unknown_error: '알 수 없는 오류',
  drag_image: '분류하기 위해 여기로 이미지 끌어오기',
  choose_image: '파일 선택',
  create_classifier: '분류자 작성',
  visual_recognition_tool: 'Visual Recognition 도구 ',
  key: '사용자:',
  api_key: '사용자 이름:비밀번호',
  update_key_button: '신임 정보 업데이트',
  classifier_general: '기본값',
  general: '일반',
  status_ready: '준비',
  status_training: '훈련',
  status_retraining: '재훈련',
  status_failed: '실패함',
  documention: '문서',
  username: '사용자 이름',
  password: '비밀번호',
  cancel: '취소',
  ok: '확인',

  // Create Classifier
  classifier_name_required_error: '분류자 이름은 필수임',
  invalid_chars_error: '올바르지 않은 문자: ',
  conflicting_class_name_error: '여러 클래스의 이름이 동일합니다. ',
  mb250_error: '서비스는 훈련 호출당 최대 256MB까지 허용합니다. ',
  add_class_error: '적어도 하나 이상의 클래스를 추가하십시오. ',
  add_neg_or_class_error: '다른 클래스를 추가하거나 부정 예제를 제공하십시오. ',
  no_classes_error: '최소 두 개의 클래스가 필요합니다. ',
  generic_error: '요청을 처리하는 중에 오류가 발생했습니다. ',
  create_classifier_title: '새 분류자 작성',
  create_classifier_description: '사용자 정의 분류자를 작성하면 고도의 전문화된 주제 항목을 식별할 수 있습니다. 분류자는 관심있는 주제를 식별하기 위해 Visual Recongnition 서비스가 훈련한 이미지 그룹에서 작성됩니다.',
  update_classifier_description: '새 클래스를 추가하거나 새 이미지를 기존 클래스에 추가하여 기존 분류자를 업데이트할 수 있습니다. 추가적인 긍적 또는 부정 예제가 있는 압축 파일을 적어도 하나를 제공해야 합니다. ',
  classifier_name: '분류자 이름',
  classes: '클래스',
  classifier_requirements: '최소 10개의 사진이 포함된 압축된 파일로 각각 최소 두 개의 클래스를 업로드하십시오. ',
  add_class: '클래스 추가',
  cancel: '취소',
  create: '작성',
  creating_classifier: '분류자 작성 중',

  // Drop button
  uploading: '업로드 중 ',
  or: '또는 ',

  // Drop Down
  api_reference: 'API 참조',
  update: '업데이트',
  delete: '삭제',

  // Progress Modal
  progress_modal_description: '이를 완료하는 데는 수 분이 소요될 수 있습니다. ',

  //Result List
  result_tooltip: '이 숫자는 정확도의 백분율을 표시하지는 않는 대신에 Watson의 신뢰도를 표시합니다. ',
  improve_score: '이 점수 개선',

  // Update Classifier
  modify_class: '적어도 하나의 클래스를 수정하거나 추가해야 합니다. ',
  update_classifier: '분류자 업데이트',
  updating_classifier: '분류자 업데이트 중'
}

i18next.use(i18nextBrowserLanguageDetector).init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation: english
        },
        ko: {
            translation: korean
        },
        es: {
            translation: spanish
        },
        ar: {
            translation: arabic
        },
        it: {
            translation: italian
        },
        ja: {
            translation: japanese
        },
        de: {
            translation: german
        }
    },
    detection: {
      order: ["localStorage", "navigator"],
      lookupQuerystring: "lng",
      caches: ["cookie"],
      cacheDir: 1000
    },
    debug: true
}, (err, t) => {
    if (err) return console.log('something went wrong loading', err)
})
