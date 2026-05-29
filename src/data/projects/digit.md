The Digit Recognizer is an end-to-end machine learning project: a convolutional neural network trained to identify handwritten digits, paired with a web app where you can draw a digit and watch the model's confidence scores update in real time.

The model is an 8-layer CNN trained on the MNIST dataset (60,000 training images and 10,000 test images), achieving 99.3% accuracy. I used Matplotlib to visualize predictions during development, which made it much easier to understand where the model was struggling.

## The web layer

I wanted the model to feel interactive, not just a static demo. The frontend is built in React with a canvas element for drawing. As you draw, the predictions update live with a bar chart showing confidence for each digit class. It made the model's internals feel transparent.

## What I explored

I experimented with network depth, pooling strategies, and dropout rates to understand their effects on convergence and generalization. The jump from 97% to 99%+ accuracy came mostly from adding more convolutional layers and tuning the learning rate, which was simpler than I expected.

The project gave me a solid foundation in the full ML workflow: data preprocessing, model design, training, evaluation, and deployment.
