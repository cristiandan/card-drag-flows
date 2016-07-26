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
	"components": [{
        "id": "comp1",
        "configuration": {
            "scriptName": "component1.py",
            "queues": {
                "in": ["queue0"],
                "out": ["queue1"]
            },
            "scaling": {
                "horizontal": 1,
                "vertical": 1
            }
        },
        "parameters": {
                "param1": { 
                    "inherited": True,
                    "sensitive": True,
                    "value": "val1",
                    "description": "this is the param 1"                  
                },
                "param2": { 
                    "inherited": False,
                    "sensitive": True,
                    "value": "val2",
                    "description": "this is the param 2"                  
                },
                "param3": { 
                    "inherited": False,
                    "sensitive": False,
                    "value": "val3",
                    "description": "this is the param 3"                  
                },
                "param4": { 
                    "inherited": True,
                    "sensitive": False,
                    "value": "val4",
                    "description": "this is the param 4"                  
                }
            }

    }, {
        "id": "comp2",
        "configuration": {
            "scriptName": "component2.py",
            "queues": {
                "in": ["queue1"],
                "out": ["queue2"]
            },
            "scaling": {
                "horizontal": 1,
                "vertical": 1
            }
        },
        "parameters": {
                "param1": { 
                    "inherited": True,
                    "sensitive": True,
                    "value": "val1",
                    "description": "this is the param 1"                  
                },
                "param2": { 
                    "inherited": False,
                    "sensitive": True,
                    "value": "val2",
                    "description": "this is the param 2"                  
                },
                "param3": { 
                    "inherited": False,
                    "sensitive": False,
                    "value": "val3",
                    "description": "this is the param 3"                  
                },
                "param4": { 
                    "inherited": True,
                    "sensitive": False,
                    "value": "val4",
                    "description": "this is the param 4"                  
                }
            }

    }, {
        "id": "comp3",
        "configuration": {
            "scriptName": "component3.py",
            "queues": {
                "in": ["queue2"],
                "out": ["queue3"]
            },
            "scaling": {
                "horizontal": 1,
                "vertical": 1
            }
        },
        "parameters": {
                "param1": { 
                    "inherited": True,
                    "sensitive": True,
                    "value": "val1",
                    "description": "this is the param 1"                  
                },
                "param2": { 
                    "inherited": False,
                    "sensitive": True,
                    "value": "val2",
                    "description": "this is the param 2"                  
                },
                "param3": { 
                    "inherited": False,
                    "sensitive": False,
                    "value": "val3",
                    "description": "this is the param 3"                  
                },
                "param4": { 
                    "inherited": True,
                    "sensitive": False,
                    "value": "val4",
                    "description": "this is the param 4"                  
                }
            }

    }]
	}
	
	return json.jsonify(**componentsList);

@app.route('/jobs')
def jobs():
	jobsList = {
		"flows": [{
        "name": "flow1",
        "id": "FL1324"
    }, {
        "name": "flow2",
        "id": "FL1325"
    }]
	}
	return json.jsonify(**jobsList)

@app.route('/job')
def job():
	jobId = request.args.get('id')
	
	jobContent = {
		"name": "flowxy",
        "id": jobId,
        "components": [{
            "id": "comp1",
            "configuration": {
                "scriptName": "component1.py",
                "queues": {
                    "in": ["queue0"],
                    "out": ["queue1"]
                },
                "scaling": {
                    "horizontal": 1,
                    "vertical": 1
                }
            },
            "parameters": {
                "param1": { 
                    "inherited": True,
                    "sensitive": True,
                    "value": "val1",
                    "description": "this is the param 1"                  
                },
                "param2": { 
                    "inherited": False,
                    "sensitive": True,
                    "value": "val2",
                    "description": "this is the param 2"                  
                },
                "param3": { 
                    "inherited": False,
                    "sensitive": False,
                    "value": "val3",
                    "description": "this is the param 3"                  
                },
                "param4": { 
                    "inherited": True,
                    "sensitive": False,
                    "value": "val4",
                    "description": "this is the param 4"                  
                }
            }

        }, {
            "id": "comp2",
            "configuration": {
                "scriptName": "component2.py",
                "queues": {
                    "in": ["queue1"],
                    "out": ["queue2"]
                },
                "scaling": {
                    "horizontal": 1,
                    "vertical": 1
                }
            },
            "parameters": {
                "param1": { 
                    "inherited": True,
                    "sensitive": True,
                    "value": "val1",
                    "description": "this is the param 1"                  
                },
                "param2": { 
                    "inherited": False,
                    "sensitive": True,
                    "value": "val2",
                    "description": "this is the param 2"                  
                },
                "param3": { 
                    "inherited": False,
                    "sensitive": False,
                    "value": "val3",
                    "description": "this is the param 3"                  
                },
                "param4": { 
                    "inherited": True,
                    "sensitive": False,
                    "value": "val4",
                    "description": "this is the param 4"                  
                }
            }

        }, {
            "id": "comp3",
            "configuration": {
                "scriptName": "component2.py",
                "queues": {
                    "in": ["queue2"],
                    "out": ["queue3"]
                },
                "scaling": {
                    "horizontal": 1,
                    "vertical": 1
                }
            },
            "parameters": {
                "param1": { 
                    "inherited": True,
                    "sensitive": True,
                    "value": "val1",
                    "description": "this is the param 1"                  
                },
                "param2": { 
                    "inherited": False,
                    "sensitive": True,
                    "value": "val2",
                    "description": "this is the param 2"                  
                },
                "param3": { 
                    "inherited": False,
                    "sensitive": False,
                    "value": "val3",
                    "description": "this is the param 3"                  
                },
                "param4": { 
                    "inherited": True,
                    "sensitive": False,
                    "value": "val4",
                    "description": "this is the param 4"                  
                }
            }

        }]
	}
	
	return json.jsonify(**jobContent);
	
	
@app.route('/scheme', methods=['GET', 'POST'])
def scheme():
	requestData = request.get_json()
	#dump()
	#q2 = jsonify(requestData)
	#test = dict(requestData)
	#xmlData = json2xml(test)
	print requestData
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