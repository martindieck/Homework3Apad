import os

from flask import Flask, jsonify
from flask_cors import cross_origin, CORS

app = Flask(__name__,static_folder='./build',static_url_path='/')
cors = CORS(app)
app.config['CORS_HEADERS']='Content-Type'

@app.route('/getLastName/<firstName>')
@cross_origin()

def hello_world(firstName):
    if firstName == "Martin":
        succesM = {"name":"Dieck", "code":200}
        return jsonify(succesM), 200
    elif firstName == "Abhay":
        succesM = {"name":"Samant", "code":200}
        return jsonify(succesM), 200
    else:
        errorM = {"error": "User Not Found", "code":404}
        return jsonify(errorM), 404

@app.route('/')
@cross_origin()

def index():
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=80)