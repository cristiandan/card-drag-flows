import os
from flask import Flask

template_dir = os.path.abspath('../')
static_dir = os.path.abspath('../bin')

print(template_dir)

app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)
app.config.from_object('config')

from app import views