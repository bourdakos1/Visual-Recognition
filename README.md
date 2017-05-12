# Watson Visual Recognition Tool
A tool that enables users to create and manage their custom classifiers.

## Signing up for Bluemix
In order to use Watson, you need to create the service and generate credentials on [IBM Bluemix](https://console.ng.bluemix.net/catalog/services/visual-recognition/). Bluemix is IBM’s PaaS offering that lets you deploy and manage your cloud applications.

Once you sign-up you should see the Visual Recognition service, if not, go to the **Catalog** and you should find the **Visual Recognition** service under **Watson**.

![](https://cdn-images-1.medium.com/max/1600/1*3rnUw8XecCo2hEEsXGEUCA.png)

After creating the service, you should be able to find your API key by clicking **View Credentials** in the **Service Credentials** sections.

![](https://cdn-images-1.medium.com/max/1600/1*cvTfSHSTNfr4wxYY3tYcrA.png)

With your API-key you gain access to the [Visual Recognition Tool](http://visual-recognition-tooling.mybluemix.net/).

## Web
![](screenshots/web.png)

## iOS
![](screenshots/ios.png)

## Using the Endpoint
```
curl -X POST \
-F "images_file=@{IMAGE.jpg}" \
"https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?version=2016-05-20&threshold=0.0&api_key={API_KEY}&classifier_ids={CLASSIFIER_ID}"
```


```
{
   "custom_classes": 2,
   "images": [{
      "classifiers": [{
         "classes": [
            {"class": "Darth Maul", "score": 0.559958},
            {"class": "Darth Vader", "score": 0.047293}
         ],
         "classifier_id": "StarWars_1680254220",
         "name": "Star Wars"
      }],
      "image": "my_test_photo.jpg"
   }],
   "images_processed": 1
}
```
