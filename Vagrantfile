VAGRANT_API_VERSION = "2"

Vagrant.configure(VAGRANT_API_VERSION) do |config|
  config.vm.box = "arxcruz/fedora-22"
  config.vm.define "test_machine" do |test_machine|
    test_machine.vm.synced_folder "./", "/home/vagrant/ansible-recipes"
    test_machine.vm.provision "ansible" do |ansible|
      ansible.playbook = "site.yml"
      ansible.host_key_checking = false
      ansible.extra_vars = { ansible_ssh_user: "vagrant" }
    end
  end
end