---
logical: "msdyn_playbooktemplate"
display: "[DEPRECATO] Modello di playbook"
entitySetName: "msdyn_playbooktemplates"
primaryId: "msdyn_playbooktemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# [DEPRECATO] Modello di playbook

I modelli di playbook contengono la definizione del playbook che consente di creare un set standard di procedure o azioni successive consigliate.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_playbooktemplate` |
| Display name | [DEPRECATO] Modello di playbook |
| Display (plural) | Modelli di playbook |
| Schema name | `msdyn_playbooktemplate` |
| Entity set (Web API) | `msdyn_playbooktemplates` |
| Primary id attribute | `msdyn_playbooktemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_playbooktemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_playbooktemplates(<guid>)
POST /api/data/v9.2/msdyn_playbooktemplates
PATCH /api/data/v9.2/msdyn_playbooktemplates(<guid>)
DELETE /api/data/v9.2/msdyn_playbooktemplates(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_categoryid`, `msdyn_description`, `msdyn_estimatedduration`, `msdyn_fullentitylist`, `msdyn_name`, `msdyn_playbooktemplateid`, `msdyn_relatedentitylist`, `msdyn_trackprogress`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_playbooktemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_playbooktemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_playbooktemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_playbooktemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_playbooktemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_playbooktemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_playbooktemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_playbooktemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `category_playbooktemplate` | [msdyn_playbookcategory](msdyn_playbookcategory.md) | `msdyn_categoryid` | `msdyn_categoryid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_playbooktemplate_SyncErrors` | [msdyn_playbooktemplate](msdyn_playbooktemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbooktemplate` |
| `msdyn_playbooktemplate_DuplicateMatchingRecord` | [msdyn_playbooktemplate](msdyn_playbooktemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_playbooktemplate` |
| `msdyn_playbooktemplate_DuplicateBaseRecord` | [msdyn_playbooktemplate](msdyn_playbooktemplate.md) | `baserecordid` | `baserecordid_msdyn_playbooktemplate` |
| `msdyn_playbooktemplate_AsyncOperations` | [msdyn_playbooktemplate](msdyn_playbooktemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbooktemplate` |
| `msdyn_playbooktemplate_MailboxTrackingFolders` | [msdyn_playbooktemplate](msdyn_playbooktemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbooktemplate` |
| `msdyn_playbooktemplate_UserEntityInstanceDatas` | [msdyn_playbooktemplate](msdyn_playbooktemplate.md) | `objectid` | `objectid_msdyn_playbooktemplate` |
| `msdyn_playbooktemplate_ProcessSession` | [msdyn_playbooktemplate](msdyn_playbooktemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbooktemplate` |
| `msdyn_playbooktemplate_BulkDeleteFailures` | [msdyn_playbooktemplate](msdyn_playbooktemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbooktemplate` |
| `msdyn_playbooktemplate_PrincipalObjectAttributeAccesses` | [msdyn_playbooktemplate](msdyn_playbooktemplate.md) | `objectid` | `objectid_msdyn_playbooktemplate` |
| `msdyn_playbooktemplate_Annotations` | [msdyn_playbooktemplate](msdyn_playbooktemplate.md) | `objectid` | `objectid_msdyn_playbooktemplate` |
| `msdyn_playbooktemplate_msdyn_playbookinstance` | [msdyn_playbooktemplate](msdyn_playbooktemplate.md) | `msdyn_playbooktemplateid` | `msdyn_playbooktemplateid` |
| `msdyn_playbooktemplate_msdyn_playbookactivity` | [msdyn_playbooktemplate](msdyn_playbooktemplate.md) | `msdyn_playbooktemplateid` | `msdyn_playbooktemplateid` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_callablecontext_msdyn_playbooktemplate` | [msdyn_callablecontext](msdyn_callablecontext.md) | _n/a_ | `msdyn_callablecontext_msdyn_playbooktemplate` |

## Source

Generated from [msdyn_playbooktemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_playbooktemplate')) on 2026-05-07.