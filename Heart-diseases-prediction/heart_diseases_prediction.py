import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt
import seaborn as sns

hd = pd.read_csv('heart_deasease_dataset.csv')

# print(hd.head())

corr = hd.corr()
sns.heatmap(corr)
plt.show()

x = hd.drop(columns=['target'],axis=1)
y = hd['target']


