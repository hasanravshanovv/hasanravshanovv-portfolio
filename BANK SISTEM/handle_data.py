
def read_data(src):
    with open(src, 'r', encoding='utf-8') as rf:
        data = []

        cursor = 0

        while True:

            rf.seek(cursor)

            line = rf.readline().strip().split(';')

            if len(line) == 1:
                break

            user = {
                'full name': line[0],

                'username': line[1],

                'password': line[2],

                'account': []
            }

            for i in range(int(line[3])):

                line = rf.readline().strip().split(';')

                user['account'].append(
                    {
                        'acc_num': line[0],

                        'balance': int(line[1])
                    }


                )

            data.append(user)

            cursor = rf.tell()

    return data


def write_data(data, src):
    with open(src, 'w', encoding='utf-8') as wf:
        for user in data:
            wf.write(user['full name'] + ';')
            wf.write(user['username'] + ';')
            wf.write(user['password'] + ';')
            wf.write(str(len(user['account'])) + '\n')
            for account in user['account']:
                wf.write(str(account['acc_num']) + ';')
                wf.write(str(account['balance']) + '\n')
