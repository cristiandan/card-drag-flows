from flask import render_template, flash, redirect, json, request, jsonify, send_from_directory
from app import app
import os


@app.route('/')
@app.route('/index')
def index():
	return render_template("index.html")



@app.route('/components')
def components():
	componentsList = {
	'data': [
	{'name': "Loader", 'icon':'http://icons.iconarchive.com/icons/raindropmemory/down-to-earth/32/G12-Load-Up-icon.png', 'id':3, 
		'attributes': {
			'conString': {
				'value': 'db://abc',
				'editable': True,
				'type': 'string'
			},
			'conString2': {
				'value': 'db://abc2',
				'editable': False,
				'type': 'string'
			}
		} 
	}, 
	{'name': "Trimmer", 'icon':'http://icons.iconarchive.com/icons/avosoft/warm-toolbar/32/cut-icon.png', 'id':4 }, 
	{'name': "Save", 'icon':'http://icons.iconarchive.com/icons/raindropmemory/down-to-earth/32/G12-Load-Down-icon.png', 'id':5 }
	]
	}
	
	return json.jsonify(**componentsList);
	
@app.route('/scheme', methods=['GET', 'POST'])
def scheme():
	requestData = request.get_json()
	#dump()
	#q2 = jsonify(requestData)
	#test = dict(requestData)
	#xmlData = json2xml(test)
	return str(requestData)

@app.route('/bin/<path:filename>')
def serve_static(filename):
	root_dir = os.path.dirname(os.getcwd())
	print os.path.join(root_dir, 'bin')
	return send_from_directory(os.path.join(root_dir, 'bin'),   filename)

@app.route('/styles/<path:filename>')
def serve_styles(filename):
	root_dir = os.path.dirname(os.getcwd())
	print os.path.join(root_dir, 'styles')
	return send_from_directory(os.path.join(root_dir, 'styles'),   filename)