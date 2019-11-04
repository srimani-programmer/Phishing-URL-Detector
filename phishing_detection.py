import numpy as np
import pandas as pd
import feature_extraction
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression 
from flask import jsonify


def getResult(url):

    #Importing dataset
    data = pd.read_csv('Dataset/dataset.csv',delimiter=",")

    #Seperating features and labels
    X = np.array(data.iloc[: , :-1])
    y = np.array(data.iloc[: , -1])

    print(type(X))
    #Seperating training features, testing features, training labels & testing labels
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2)
   # classifier = RandomForestClassifier()
    classifier = LogisticRegression()
    classifier.fit(X_train, y_train)
    score = classifier.score(X_test, y_test)
    print(score*100)

    X_new = []

    X_input = url
    X_new=feature_extraction.generate_data_set(X_input)
    X_new = np.array(X_new).reshape(1,-1)

    analysis_result = ""

    try:
        prediction = classifier.predict(X_new)
        if prediction == -1:
            analysis_result = "Phishing URL"
        elif prediction == 0:
            analysis_result = "Suspecious"
        else:
            analysis_result = "Legitimate URL"
    except:
        analysis_result = "Baised URL"

    result_of_analysis = """<section class="iq-about overview-block-pt iq-hide">
                                    <div class="container">
                                        <div class="row align-items-end">
                                            <div class="col-lg-8 col-md-12">
                                                <div class="about-content">
                                                    <h1 class="text-about iq-tw-6">Result of Your URL : <span class="iq-font-green iq-fw-8">"""+url+"""</span></h1>
                                                    <ul class="listing-mark iq-mtb-20 iq-tw-6 iq-font-black">
                                                        <li class="good">"""+analysis_result+"""</li>
                                                    </ul>
                                                    <a class="button iq-mt-20 iq-mb-80" href="#" role="button">Read More</a>
                                                </div>
                                            </div>
                                            <!-- For Graphs-->
                                            <!-- <div class="col-lg-4 col-md-12 iq-about-img"><img class="img-fluid wow bounceInUp" data-wow-duration="2s" src="{{ url_for('static', filename='images/02.png') }}" alt="#" style="visibility: visible; animation-duration: 2s; animation-name: bounceInUp;"> </div> -->
                                        </div>
                                    </div>
                                </section>
                                """
    return result_of_analysis