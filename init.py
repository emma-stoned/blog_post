import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24)  # Set a random secret key
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
data_base = SQLAlchemy(app)
