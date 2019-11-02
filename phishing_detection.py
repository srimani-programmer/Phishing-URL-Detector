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

    try:
        prediction = classifier.predict(X_new)
        if prediction == -1:
            return "Phishing URL"
        else:
            return "Legitimate URL"
    except:
        return "Baised URL"
