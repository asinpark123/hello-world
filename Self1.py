'''
# Project: self1
# Author: Ah Shin Park
'''
# path addr in Pathlist as tuple
# pathList will be parameter object containing tuples of paths

import psutil

pathList = ()

def udemySet(self, pathList):
    pass




def checkIfProcessRunning(processName):
    '''
    Check if there is any running process that contains the given name processName.
    '''
    #Iterate over the all the running process
    for proc in psutil.process_iter():
        try:
            # Check if process name contains the given name string.
            if processName.lower() in proc.name().lower():
                return True
        except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
            pass
    return False





