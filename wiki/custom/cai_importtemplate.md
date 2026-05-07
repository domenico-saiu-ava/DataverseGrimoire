---
logical: "cai_importtemplate"
display: "Template di import"
entitySetName: "cai_importtemplates"
primaryId: "cai_importtemplateid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Template di import

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_importtemplate` |
| Display name | Template di import |
| Display (plural) | Templates di import |
| Schema name | `cai_importtemplate` |
| Entity set (Web API) | `cai_importtemplates` |
| Primary id attribute | `cai_importtemplateid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_importtemplates?$select=cai_name&$top=10
GET /api/data/v9.2/cai_importtemplates(<guid>)
POST /api/data/v9.2/cai_importtemplates
PATCH /api/data/v9.2/cai_importtemplates(<guid>)
DELETE /api/data/v9.2/cai_importtemplates(<guid>)
```

## Attributes

Writable: **16** · Read-only: **11**

### Writable

`cai_code`, `cai_description`, `cai_importtemplateid`, `cai_importtype`, `cai_name`, `cai_requiredcolumns`, `cai_targetentity`, `cai_templatekey`, `cai_templateversion`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`cai_templatefile`, `createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_importtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_importtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_importtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_importtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_importtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_importtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_importtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_importtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_cai_importtemplate_cai_templatefile` | [fileattachment](fileattachment.md) | `cai_templatefile` | `cai_templatefile` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_importtemplate_SyncErrors` | [cai_importtemplate](cai_importtemplate.md) | `regardingobjectid` | `regardingobjectid_cai_importtemplate` |
| `cai_importtemplate_AsyncOperations` | [cai_importtemplate](cai_importtemplate.md) | `regardingobjectid` | `regardingobjectid_cai_importtemplate` |
| `cai_importtemplate_MailboxTrackingFolders` | [cai_importtemplate](cai_importtemplate.md) | `regardingobjectid` | `regardingobjectid_cai_importtemplate` |
| `cai_importtemplate_UserEntityInstanceDatas` | [cai_importtemplate](cai_importtemplate.md) | `objectid` | `objectid_cai_importtemplate` |
| `cai_importtemplate_ProcessSession` | [cai_importtemplate](cai_importtemplate.md) | `regardingobjectid` | `regardingobjectid_cai_importtemplate` |
| `cai_importtemplate_BulkDeleteFailures` | [cai_importtemplate](cai_importtemplate.md) | `regardingobjectid` | `regardingobjectid_cai_importtemplate` |
| `cai_importtemplate_PrincipalObjectAttributeAccesses` | [cai_importtemplate](cai_importtemplate.md) | `objectid` | `objectid_cai_importtemplate` |
| `cai_importtemplate_FileAttachments` | [cai_importtemplate](cai_importtemplate.md) | `objectid` | `objectid_cai_importtemplate` |
| `cai_lead_importtemplateid_cai_importtemplate` | [cai_importtemplate](cai_importtemplate.md) | `cai_importtemplateid` | `cai_importtemplateid` |


## Source

Generated from [cai_importtemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_importtemplate')) on 2026-05-07.