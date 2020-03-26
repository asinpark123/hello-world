'''
# Project: self1
# Author: Ah Shin Park
'''
# path addr in Pathlist as tuple
# pathList will be parameter object containing tuples of paths

import psutil

pathList = ()

# udemySet is for opening set of directories that I need for studying in Udemy
# come back to this later

def udemySet(self, pathList):
    pass




def checkIfProcessRunning(processName):
    '''
    Check if there is any running process that contains the given process's name stored in processName.
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


# UI section
# asks for the name of the process that you're searching to see if it's running

def main():
    processName = input("What process do you wish to search?: ")
    nextSearch = ""

    while True:
        if checkIfProcessRunning(processName) == True:
            print(f"{processName} is running")
        else:
            print(f"{processName} is not running")

    # break sequence 
        nextSearch = input("Press Y to search for another process or any other key to exit: ")
        if (nextSearch == "Y" or "y"):
            main()

        elif (nextSearch == "N" or "n"):
            break

        

    # break sequence
    # nextSearch = input("Do you wish to search for another? (Y/N): ")
    # if (nextSearch == "N" or "n"):
    #     input("Press Enter to exit")
    # elif (nextSearch == "Y" or "y"):
    #     main()
    # else:
    #     nextSearch = input("Wrong key input - Do you wish to search for another? (Y/N): ")

    

main()



