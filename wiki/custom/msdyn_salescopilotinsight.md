---
logical: "msdyn_salescopilotinsight"
display: "Informazione dettagliata di Sales Copilot"
entitySetName: "msdyn_salescopilotinsights"
primaryId: "msdyn_salescopilotinsightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Informazione dettagliata di Sales Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescopilotinsight` |
| Display name | Informazione dettagliata di Sales Copilot |
| Display (plural) | Informazioni dettagliate di Sales Copilot |
| Schema name | `msdyn_salescopilotinsight` |
| Entity set (Web API) | `msdyn_salescopilotinsights` |
| Primary id attribute | `msdyn_salescopilotinsightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salescopilotinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salescopilotinsights(<guid>)
POST /api/data/v9.2/msdyn_salescopilotinsights
PATCH /api/data/v9.2/msdyn_salescopilotinsights(<guid>)
DELETE /api/data/v9.2/msdyn_salescopilotinsights(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_activityid`, `msdyn_ctatype`, `msdyn_duedate`, `msdyn_insighttext`, `msdyn_name`, `msdyn_salescopilotinsightid`, `msdyn_targetentityid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_salescopilotinsight_account_msdyn_targetentityid` | [account](account.md) | `msdyn_targetentityid` | `msdyn_targetentityid_account` |
| `msdyn_msdyn_salescopilotinsight_appointment_msdyn_activityid` | [appointment](appointment.md) | `msdyn_activityid` | `msdyn_activityid_appointment` |
| `msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid` | [contact](contact.md) | `msdyn_targetentityid` | `msdyn_targetentityid_contact` |
| `msdyn_msdyn_salescopilotinsight_email_msdyn_activityid` | [email](email.md) | `msdyn_activityid` | `msdyn_activityid_email` |
| `msdyn_msdyn_salescopilotinsight_lead_msdyn_targetentityid` | [lead](lead.md) | `msdyn_targetentityid` | `msdyn_targetentityid_lead` |
| `msdyn_msdyn_salescopilotinsight_opportunity_msdyn_targetentityid` | [opportunity](opportunity.md) | `msdyn_targetentityid` | `msdyn_targetentityid_opportunity` |
| `msdyn_msdyn_salescopilotinsight_phonecall_msdyn_activityid` | [phonecall](phonecall.md) | `msdyn_activityid` | `msdyn_activityid_phonecall` |
| `msdyn_msdyn_salescopilotinsight_task_msdyn_activityid` | [task](task.md) | `msdyn_activityid` | `msdyn_activityid_task` |
| `lk_msdyn_salescopilotinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescopilotinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescopilotinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescopilotinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salescopilotinsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salescopilotinsight` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salescopilotinsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salescopilotinsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotinsight_SyncErrors` | [msdyn_salescopilotinsight](msdyn_salescopilotinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotinsight` |
| `msdyn_salescopilotinsight_DuplicateMatchingRecord` | [msdyn_salescopilotinsight](msdyn_salescopilotinsight.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salescopilotinsight` |
| `msdyn_salescopilotinsight_DuplicateBaseRecord` | [msdyn_salescopilotinsight](msdyn_salescopilotinsight.md) | `baserecordid` | `baserecordid_msdyn_salescopilotinsight` |
| `msdyn_salescopilotinsight_AsyncOperations` | [msdyn_salescopilotinsight](msdyn_salescopilotinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotinsight` |
| `msdyn_salescopilotinsight_MailboxTrackingFolders` | [msdyn_salescopilotinsight](msdyn_salescopilotinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotinsight` |
| `msdyn_salescopilotinsight_UserEntityInstanceDatas` | [msdyn_salescopilotinsight](msdyn_salescopilotinsight.md) | `objectid` | `objectid_msdyn_salescopilotinsight` |
| `msdyn_salescopilotinsight_ProcessSession` | [msdyn_salescopilotinsight](msdyn_salescopilotinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotinsight` |
| `msdyn_salescopilotinsight_BulkDeleteFailures` | [msdyn_salescopilotinsight](msdyn_salescopilotinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotinsight` |
| `msdyn_salescopilotinsight_PrincipalObjectAttributeAccesses` | [msdyn_salescopilotinsight](msdyn_salescopilotinsight.md) | `objectid` | `objectid_msdyn_salescopilotinsight` |


## Source

Generated from [msdyn_salescopilotinsight (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salescopilotinsight')) on 2026-05-07.