"""
rest interface
"""

from flask import Flask, jsonify, request

from battleground.persistence import game_data
from battleground.persistence import agent_data

app = Flask(__name__)


@app.route("/api/states/<game_id>")
def get_game_states(game_id):
    data = game_data.load_game_history(game_id)
    output = []
    for doc in data:
        doc["_id"] = str(doc["_id"])
        doc["game_id"] = str(doc["game_id"])
        output.append(doc)
    return jsonify(output)


@app.route("/api/games/<game_type>")
def get_games(game_type):
    data = game_data.get_games_list(game_type=game_type)[0:10]
    output = []
    for doc in data:
        doc["_id"] = str(doc["_id"])
        output.append(doc)
    return jsonify(output)


@app.route("/api/games/")
def get_games_types():
    data = game_data.get_games_list()[0:10]
    output = []
    for doc in data:
        doc["_id"] = str(doc["_id"])
        output.append(doc)
    return jsonify(output)


@app.route("/api/stats/<game_type>")
def get_game_results(game_type):
    data = agent_data.load_game_results(game_type=game_type)
    return jsonify(data)


@app.route("/api/agents/meta/<agent_id>")
def get_agent_meta_data(agent_id):
    try:
        meta_data = agent_data.get_agents(agent_id=agent_id)[0]
        meta_data['_id'] = str(meta_data['_id'])
        return jsonify(meta_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route("/api/agents/code/<agent_id>")
def get_agent_code(agent_id):
    try:
        meta_data = agent_data.get_agents(agent_id=agent_id, fields=['code'])[0]
        meta_data['_id'] = str(meta_data['_id'])
        return jsonify(meta_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route("/api/agents/results/<agent_id>")
def get_agent_results(agent_id):
    results = agent_data.load_agent_results(agent_id=agent_id, limit=10)
    output = []
    for doc in results:
        doc["_id"] = str(doc["_id"])
        output.append(doc)
    return jsonify(output)


@app.route("/api/upload/", methods=["POST"])
def upload_code():
    if request.method == "POST":
        try:
            values = request.get_json()
            owner = values['owner']
            name = values['agentName']
            game_type = values['gameType']
            code = values['file']
            agent_id = agent_data.save_agent_code(owner, name, game_type, code)
            return jsonify({'agent_id': str(agent_id)})
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    else:
        return jsonify({'error': 'use method POST'}), 500


@app.route("/api/")
def main():
    return "The API is alive!"
