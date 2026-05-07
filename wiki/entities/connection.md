---
logical: "connection"
display: "Connection"
entitySetName: "connections"
primaryId: "connectionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Connection

Relationship between two entities.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `connection` |
| Display name | Connection |
| Display (plural) | Connections |
| Schema name | `Connection` |
| Entity set (Web API) | `connections` |
| Primary id attribute | `connectionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/connections?$select=name&$top=10
GET /api/data/v9.2/connections(<guid>)
POST /api/data/v9.2/connections
PATCH /api/data/v9.2/connections(<guid>)
DELETE /api/data/v9.2/connections(<guid>)
```

## Attributes

Writable: **18** · Read-only: **21**

### Writable

`ConnectionId`, `Description`, `EffectiveEnd`, `EffectiveStart`, `EntityImage`, `ImportSequenceNumber`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Record1Id`, `Record1IdObjectTypeCode`, `Record1RoleId`, `Record2Id`, `Record2IdObjectTypeCode`, `Record2RoleId`, `StateCode`, `StatusCode`, `TransactionCurrencyId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeRate`, `IsMaster`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `Record1ObjectTypeCode`, `Record2ObjectTypeCode`, `RelatedConnectionId`, `VersionNumber`

## Relationships

### Many-to-One (60)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_connections1` | [account](account.md) | `record1id` | `record1id_account` |
| `account_connections2` | [account](account.md) | `record2id` | `record2id_account` |
| `activitypointer_connections1` | [activitypointer](activitypointer.md) | `record1id` | `record1id_activitypointer` |
| `activitypointer_connections2` | [activitypointer](activitypointer.md) | `record2id` | `record2id_activitypointer` |
| `adx_invitation_connections1` | [adx_invitation](adx_invitation.md) | `record1id` | `record1id_adx_invitation` |
| `adx_invitation_connections2` | [adx_invitation](adx_invitation.md) | `record2id` | `record2id_adx_invitation` |
| `adx_inviteredemption_connections1` | [adx_inviteredemption](adx_inviteredemption.md) | `record1id` | `record1id_adx_inviteredemption` |
| `adx_inviteredemption_connections2` | [adx_inviteredemption](adx_inviteredemption.md) | `record2id` | `record2id_adx_inviteredemption` |
| `appointment_connections1` | [appointment](appointment.md) | `record1id` | `record1id_appointment` |
| `appointment_connections2` | [appointment](appointment.md) | `record2id` | `record2id_appointment` |
| `business_unit_connections` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `connection_related_connection` | [connection](connection.md) | `relatedconnectionid` | `relatedconnectionid` |
| `connection_role_connections1` | [connectionrole](connectionrole.md) | `record1roleid` | `record1roleid` |
| `connection_role_connections2` | [connectionrole](connectionrole.md) | `record2roleid` | `record2roleid` |
| `contact_connections1` | [contact](contact.md) | `record1id` | `record1id_contact` |
| `contact_connections2` | [contact](contact.md) | `record2id` | `record2id_contact` |
| `createdby_connection` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `email_connections1` | [email](email.md) | `record1id` | `record1id_email` |
| `email_connections2` | [email](email.md) | `record2id` | `record2id_email` |
| `fax_connections1` | [fax](fax.md) | `record1id` | `record1id_fax` |
| `fax_connections2` | [fax](fax.md) | `record2id` | `record2id_fax` |
| `goal_connections1` | [goal](goal.md) | `record1id` | `record1id_goal` |
| `goal_connections2` | [goal](goal.md) | `record2id` | `record2id_goal` |
| `knowledgearticle_connections1` | [knowledgearticle](knowledgearticle.md) | `record1id` | `record1id_knowledgearticle` |
| `knowledgearticle_connections2` | [knowledgearticle](knowledgearticle.md) | `record2id` | `record2id_knowledgearticle` |
| `KnowledgeBaseRecord_connections1` | [knowledgebaserecord](knowledgebaserecord.md) | `record1id` | `record1id_knowledgebaserecord` |
| `KnowledgeBaseRecord_connections2` | [knowledgebaserecord](knowledgebaserecord.md) | `record2id` | `record2id_knowledgebaserecord` |
| `letter_connections1` | [letter](letter.md) | `record1id` | `record1id_letter` |
| `letter_connections2` | [letter](letter.md) | `record2id` | `record2id_letter` |
| `lk_connectionbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_connectionbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `modifiedby_connection` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `mspp_publishingstatetransitionrule_connections1` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `record1id` | `record1id_mspp_publishingstatetransitionrule` |
| `mspp_publishingstatetransitionrule_connections2` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `record2id` | `record2id_mspp_publishingstatetransitionrule` |
| `mspp_shortcut_connections1` | [mspp_shortcut](mspp_shortcut.md) | `record1id` | `record1id_mspp_shortcut` |
| `mspp_shortcut_connections2` | [mspp_shortcut](mspp_shortcut.md) | `record2id` | `record2id_mspp_shortcut` |
| `mspp_website_connections1` | [mspp_website](mspp_website.md) | `record1id` | `record1id_mspp_website` |
| `mspp_website_connections2` | [mspp_website](mspp_website.md) | `record2id` | `record2id_mspp_website` |
| `owner_connections` | [owner](owner.md) | `ownerid` | `ownerid` |
| `phonecall_connections1` | [phonecall](phonecall.md) | `record1id` | `record1id_phonecall` |
| `phonecall_connections2` | [phonecall](phonecall.md) | `record2id` | `record2id_phonecall` |
| `position_connection1` | [position](position.md) | `record1id` | `record1id_position` |
| `position_connection2` | [position](position.md) | `record2id` | `record2id_position` |
| `processsession_connections1` | [processsession](processsession.md) | `record1id` | `record1id_processsession` |
| `processsession_connections2` | [processsession](processsession.md) | `record2id` | `record2id_processsession` |
| `recurringappointmentmaster_connections1` | [recurringappointmentmaster](recurringappointmentmaster.md) | `record1id` | `record1id_recurringappointmentmaster` |
| `recurringappointmentmaster_connections2` | [recurringappointmentmaster](recurringappointmentmaster.md) | `record2id` | `record2id_recurringappointmentmaster` |
| `socialactivity_connections1` | [socialactivity](socialactivity.md) | `record1id` | `record1id_socialactivity` |
| `socialactivity_connections2` | [socialactivity](socialactivity.md) | `record2id` | `record2id_socialactivity` |
| `socialprofile_connections1` | [socialprofile](socialprofile.md) | `record1id` | `record1id_socialprofile` |
| `socialprofile_connections2` | [socialprofile](socialprofile.md) | `record2id` | `record2id_socialprofile` |
| `systemuser_connections1` | [systemuser](systemuser.md) | `record1id` | `record1id_systemuser` |
| `systemuser_connections2` | [systemuser](systemuser.md) | `record2id` | `record2id_systemuser` |
| `task_connections1` | [task](task.md) | `record1id` | `record1id_task` |
| `task_connections2` | [task](task.md) | `record2id` | `record2id_task` |
| `team_connections1` | [team](team.md) | `record1id` | `record1id_team` |
| `team_connections2` | [team](team.md) | `record2id` | `record2id_team` |
| `territory_connections1` | [territory](territory.md) | `record1id` | `record1id_territory` |
| `territory_connections2` | [territory](territory.md) | `record2id` | `record2id_territory` |
| `TransactionCurrency_Connection` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Connection_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `connection_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Connection_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `connection_related_connection` | _n/a_ | `relatedconnectionid` | _n/a_ |
| `Connection_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [connection.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/connection.md) on 2026-05-06.