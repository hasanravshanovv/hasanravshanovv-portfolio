
from handle_data import read_data, write_data

data = read_data('bankdata.txt')

write_data(data, 'bankdata.copy.txt')


def print_options():
    print('''
1 - list accounts
2 - transfer money
3 - open a new account
4 - logout
''')


def list_accounts(user):
    for i, account in enumerate(user['account'], 1):
        print(f'{i}. {account["acc_num"]} - balance {account["balance"]} rub')


def create_account(user):
    from random import randint
    user['account'].append(
        {
            "acc_num": str(randint(10 ** 15, 10 ** 16 - 1)),
            "balance": 0
        }
    )


def choose_action():
    action = input('chose a action - ')
    return int(action)


def transfer_money(user):

    if len(user['account']) >= 2:

        available_range = list(range(1, len(user['account']) + 1))

        list_accounts(user)

        while True:

            sourse = int(input('select the sourse account - '))
            if sourse in available_range:
                available_range.remove(sourse)

            while True:
                target = int(input('select the target account - '))
                if target in available_range:
                    while True:
                        amount = int(input('enter the amount to transfer - '))
                        if user['account'][sourse - 1]['balance'] > amount:
                            user['account'][sourse - 1]['balance'] -= amount
                            user['account'][target - 1]['balance'] += amount
                            list_accounts(user)
                            return
                        else:
                            print(f'insufficient funds on account {sourse}')

                else:
                    print('incorrect pleace try again ')
                    continue

    else:

        print('you need to have at least two accoonts for this operation!!!')


def auth():
    while True:
        user_active = None
        username = (input('enter a username - ')).strip()
        password = (input('enter a password - ')).strip()

        for user in data:

            if username == user["username"] and password == user["password"]:

                user_active = user

                print(f'welcome to our bank!!!  {user["full name"]}')

                break
        else:

            print('Incorrect username/password')

            continue
        while True:

            print_options()

            action = choose_action()

            if action == 1:
                list_accounts(user_active)

            elif action == 2:
                transfer_money(user_active)
                write_data(data, 'bankdata.txt')

            elif action == 3:
                create_account(user_active)
                write_data(data, 'bankdata.txt')

            elif action == 4:
                return

            else:
                print('please select correct option')


def start():
    print('welcome to online bank')

    auth()


while True:
    start()
