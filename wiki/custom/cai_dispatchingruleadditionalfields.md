---
logical: "cai_dispatchingruleadditionalfields"
display: "Campi aggiuntivi regola smistamento Lead"
entitySetName: "cai_dispatchingruleadditionalfieldses"
primaryId: "cai_dispatchingruleadditionalfieldsid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Campi aggiuntivi regola smistamento Lead

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_dispatchingruleadditionalfields` |
| Display name | Campi aggiuntivi regola smistamento Lead |
| Display (plural) | Campi aggiuntivi regola smistamento Lead |
| Schema name | `cai_dispatchingruleadditionalfields` |
| Entity set (Web API) | `cai_dispatchingruleadditionalfieldses` |
| Primary id attribute | `cai_dispatchingruleadditionalfieldsid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_dispatchingruleadditionalfieldses?$select=cai_name&$top=10
GET /api/data/v9.2/cai_dispatchingruleadditionalfieldses(<guid>)
POST /api/data/v9.2/cai_dispatchingruleadditionalfieldses
PATCH /api/data/v9.2/cai_dispatchingruleadditionalfieldses(<guid>)
DELETE /api/data/v9.2/cai_dispatchingruleadditionalfieldses(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`cai_additionalfieldname`, `cai_additionalfieldvalue`, `cai_dispatchingruleadditionalfieldsid`, `cai_dispatchingruleid`, `cai_name`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_dispatchingruleadditionalfields_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_dispatchingruleadditionalfields_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_dispatchingruleadditionalfields_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_dispatchingruleadditionalfields_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_dispatchingruleadditionalfields` | [organization](organization.md) | `organizationid` | `organizationid` |
| `cai_dispatchingruleadditionalfields_cai_dispatchingrule` | [cai_dispatchingrule](cai_dispatchingrule.md) | `cai_dispatchingruleid` | `cai_dispatchingruleid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_dispatchingruleadditionalfields_SyncErrors` | [cai_dispatchingruleadditionalfields](cai_dispatchingruleadditionalfields.md) | `regardingobjectid` | `regardingobjectid_cai_dispatchingruleadditionalfields` |
| `cai_dispatchingruleadditionalfields_DuplicateMatchingRecord` | [cai_dispatchingruleadditionalfields](cai_dispatchingruleadditionalfields.md) | `duplicaterecordid` | `duplicaterecordid_cai_dispatchingruleadditionalfields` |
| `cai_dispatchingruleadditionalfields_DuplicateBaseRecord` | [cai_dispatchingruleadditionalfields](cai_dispatchingruleadditionalfields.md) | `baserecordid` | `baserecordid_cai_dispatchingruleadditionalfields` |
| `cai_dispatchingruleadditionalfields_AsyncOperations` | [cai_dispatchingruleadditionalfields](cai_dispatchingruleadditionalfields.md) | `regardingobjectid` | `regardingobjectid_cai_dispatchingruleadditionalfields` |
| `cai_dispatchingruleadditionalfields_MailboxTrackingFolders` | [cai_dispatchingruleadditionalfields](cai_dispatchingruleadditionalfields.md) | `regardingobjectid` | `regardingobjectid_cai_dispatchingruleadditionalfields` |
| `cai_dispatchingruleadditionalfields_UserEntityInstanceDatas` | [cai_dispatchingruleadditionalfields](cai_dispatchingruleadditionalfields.md) | `objectid` | `objectid_cai_dispatchingruleadditionalfields` |
| `cai_dispatchingruleadditionalfields_ProcessSession` | [cai_dispatchingruleadditionalfields](cai_dispatchingruleadditionalfields.md) | `regardingobjectid` | `regardingobjectid_cai_dispatchingruleadditionalfields` |
| `cai_dispatchingruleadditionalfields_BulkDeleteFailures` | [cai_dispatchingruleadditionalfields](cai_dispatchingruleadditionalfields.md) | `regardingobjectid` | `regardingobjectid_cai_dispatchingruleadditionalfields` |
| `cai_dispatchingruleadditionalfields_PrincipalObjectAttributeAccesses` | [cai_dispatchingruleadditionalfields](cai_dispatchingruleadditionalfields.md) | `objectid` | `objectid_cai_dispatchingruleadditionalfields` |


## Source

Generated from [cai_dispatchingruleadditionalfields (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_dispatchingruleadditionalfields')) on 2026-05-07.