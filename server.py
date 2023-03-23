from flask import Flask, render_template, current_app

app = Flask(__name__)

@app.route("/")
def hello_world():
    return current_app.send_static_file("index.html")
