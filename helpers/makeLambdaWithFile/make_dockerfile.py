
def make_docker_file(language, algo_name, handler):
    docker_setup = '# syntax=docker/dockerfile:1'
    lambda_language = 'FROM public.ecr.aws/lambda/' + language
    copy_reqs = 'COPY requirements.txt .'
    run_reqs = 'RUN pip install -r requirements.txt'
    copy_algo = 'COPY ' + algo_name + ' ./'
    cmd_handler = 'CMD ["' + handler + '"]' 

    with open('Dockerfile', 'x') as df:
        df.write('\n'.join([docker_setup, lambda_language, copy_reqs, run_reqs, copy_algo, cmd_handler]))
        df.write('\n')


if __name__ == "__main__":
    make_docker_file('python:3.8', 'algo_lambda.py', 'algo_lambda.handler')
