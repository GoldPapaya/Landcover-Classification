# Landcover-Classification
This app uses supervised machine learning to seperate and visualize terrain classes of the UK in EarthEngine. 
I manually selected 212 points in the UK to train the model (full breakdown below), and the result looks spectacular!

<img align="center" src="https://user-images.githubusercontent.com/93890310/211419188-874eb938-5bc6-4e72-94b8-ed5d4d041c2b.png">
<img align="center" src="https://user-images.githubusercontent.com/93890310/211421394-2c287362-0006-45dd-9579-48c92658ed06.png">

Dispite a tiny amount of sample data, the product looks very good! Observe that crops, forests, and water are represented
especially well. Cities and barren land appear similar visibly, so there are a lot of expected errors around the Scottish 
highlands and city sprawl.

The complete breakdown of sample distribution is:
35 water samples,
41 urban samples,
53 crop samples,
46 forest samples,
and 37 barren samples.

More detail can be found in the associated js file, or by accessing the app itself: https://goldpapaya.users.earthengine.app/view/uk-land-cover-classification.
