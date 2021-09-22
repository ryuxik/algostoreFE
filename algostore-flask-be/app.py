from flask import Flask
from flask_restful import Resource, Api, abort, reqparse

app = Flask(__name__)
api = Api(app)

ALGORITHMS = {
    'algorithm1': {
        'name': 'N**2 MATMUL',
        'id': 'algorithm1',
        'summary': 'A Rawn special. Literally the most valuable innovation this century.',
        'category': 'PERFORMANCE'
    },
    'algorithm2':                 {
        'name': 'Bubble Sort',
        'id': 'algorithm2',
        'summary': 'You need this. Enables you to sort any data keyed on an integer as slow as you can imagaine.',
        'category': 'SORTING'
    },
    'algorithm3':                 {
        'name': 'Depth First Search',
        'id': 'algorithm3',
        'summary': 'Explores all of a data graph to the very end. A good adventure.',
        'category': 'SEARCH'
    },
}


def abort_if_algorithm_not_found(algorithm_id):
    if algorithm_id not in ALGORITHMS:
        abort(404, message="Algorithm {} was not found".format(algorithm_id))


parser = reqparse.RequestParser()
parser.add_argument('name')


class Algorithm(Resource):
    def get(self, algorithm_id):
        abort_if_algorithm_not_found(algorithm_id)
        return ALGORITHMS[algorithm_id]

    def put(self, algorithm_id):
        args = parser.parse_args()
        name = {'name': args['name']}
        ALGORITHMS[algorithm_id] = name
        return name, 201


class AlgorithmList(Resource):
    def get(self):
        return [
            {
                "id":  algorithm_id,
                "name": ALGORITHMS[algorithm_id]["name"]
            }
            for algorithm_id in ALGORITHMS]


api.add_resource(Algorithm, '/algorithm/<string:algorithm_id>')
api.add_resource(AlgorithmList, '/algorithms')

if __name__ == '__main__':
    app.run(debug=True)