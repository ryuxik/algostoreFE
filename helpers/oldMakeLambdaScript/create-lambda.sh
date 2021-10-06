#!/bin/bash
#Haven't done region or account

pflag=true
dflag=true
eflag=false
lflag=false
rflag=false

usage () { echo "Creates lambda of python function"; \
echo "-p python file with function 'handler'"; \
echo "-d docker file";\
echo "-e ecr name";\
echo "-l lambda name";\
echo "-r lambda role";\
}

options='p:d:e:l:r:h'
while getopts $options option
do
    case "$option" in
        p  ) pflag=true; python_file=$OPTARG;;
        d  ) dflag=true; docker_file=$OPTARG;;
        e  ) eflag=true; ecr_name=$OPTARG;;
        l  ) lflag=true; lambda_name=$OPTARG;;
        r  ) rflag=true; lambda_role=$OPTARG;;
        h  ) usage; exit;;
        \? ) echo "Unknown option: -$OPTARG" >&2; exit 1;;
        :  ) echo "Missing option argument for -$OPTARG" >&2; exit 1;;
        *  ) echo "Unimplemented option: -$option" >&2; exit 1;;
    esac
done

if ((OPTIND == 1))
then
    echo "No options specified"
fi

shift $((OPTIND - 1))

if ! $pflag
then
    echo "-p must be included to indicate python file" >&2
    exit 1
fi

if ! $dflag
then
    echo "-d must be included to indicate docker file" >&2
    exit 1
fi

if ! $eflag
then
    echo "-e must be included to indicate ecr name" >&2
    exit 1
fi

if ! $lflag
then
    echo "-l must be included to indicate lambda name" >&2
    exit 1
fi

if ! $rflag
then
    echo "-r must be included to indicate lambda role" >&2
    exit 1
fi



#create ECR
URI=$(aws ecr create-repository --repository-name $ecr_name | python3 -c "import sys, json; print(json.load(sys.stdin)['repository']['repositoryUri'])")
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin $URI
docker build -t $ecr_name .
docker tag $ecr_name:latest $URI
docker push $URI:latest

#create lambda
aws lambda create-function --function-name $ecr_name --code ImageUri=$URI:latest --package-type Image --role $lambda_role


