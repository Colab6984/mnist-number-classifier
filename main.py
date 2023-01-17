#!/usr/bin/env python
from os import listdir
import importlib
import dataset
from dataset import load_images
import numpy as np
import os 


images = dataset.load_images("datasets/t10k-images-idx3-ubyte")
os.makedirs("images")
for i in range(9):
  image = images[i]
  dataset.image_to_file(image, f"images/image{i}.png")