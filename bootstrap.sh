sudo apt-get update
sudo apt-get install language-pack-en

sudo apt-get install -y zsh curl python3 python3-venv
sudo apt-get install -y ruby ruby-dev gcc make
#sudo chsh -s /bin/zsh ubuntu
zsh
git clone git://github.com/robbyrussell/oh-my-zsh.git .oh-my-zsh
cp .oh-my-zsh/templates/zshrc.zsh-template .zshrc
sudo chsh -s /bin/zsh ubuntu

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get -y install nodejs build-essential

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

sudo yarn global add create-react-app
sudo yarn global add @storybook/cli

sudo gem install travis -v 1.8.8 --no-rdoc --no-ri

curl -L https://github.com/docker/machine/releases/download/v0.12.2/docker-machine-`uname -s`-`uname -m` >/tmp/docker-machine
chmod +x /tmp/docker-machine
sudo cp /tmp/docker-machine /usr/local/bin/docker-machine

sudo echo "
export LC_ALL=C.UTF-8
export LANG=C.UTF-8

source ~/python3/bin/activate
cd /vagrant
export PYTHONPATH=$PYTHONPATH:/vagrant
" >> .zshrc
