#!/usr/bin/env python3
"""
Root build wrapper — delegates to network/build.py
"""
import os
import subprocess
import sys

root_dir = os.path.dirname(os.path.abspath(__file__))
network_build = os.path.join(root_dir, 'network', 'build.py')

if os.path.exists(network_build):
    result = subprocess.run([sys.executable, network_build] + sys.argv[1:])
    sys.exit(result.returncode)
else:
    print("Error: network/build.py not found.", file=sys.stderr)
    sys.exit(1)

