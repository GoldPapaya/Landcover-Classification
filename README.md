# Landcover-Classification
This app uses supervised machine learning to seperate and visualize terrain classes of the UK in Google Earth Engine. 
I manually selected 212 points in the UK to train the model (full breakdown below), and the result is... well... judge for yourself.

<div align="center">
  
Actual             |  Model
:-------------------------:|:-------------------------:
![Screenshot_3](https://user-images.githubusercontent.com/93890310/211421713-4515eaa9-7154-4810-b407-7e23d608c338.png)  |  ![Screenshot_2](https://user-images.githubusercontent.com/93890310/211421702-d31d4ea9-7535-4f59-9db2-17c8626d67c8.png)
  
</div>

Despite using only a small amount of sample data, the product seems reasonable. Observe that crops, forests, and water are represented
especially well. Cities and barren land appear similar visibly, so there are a lot of expected errors around the Scottish 
highlands and city sprawl.

The complete breakdown of sample distribution is:
35 water samples,
41 urban samples,
53 crop samples,
46 forest samples,
and 37 barren samples.

Feel free to play around with the samples/add your own! Also feel free to modify the code and use it however you want, I don't mind! Just be sure to abide by Google Earth Engine policies for making applications. This app was made for educational purposes.

More detail can be found in the associated file, or by accessing the app itself: https://goldpapaya.users.earthengine.app/view/uk-land-cover-classification.

NOTE: it might take a minute to generate the model in the app, if this happens just wait a minute and it will appear.
