---
logical: "emailaddressconfiguration"
display: "Configurazione indirizzo e-mail"
entitySetName: "emailaddressconfigurations"
primaryId: "emailaddressconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione indirizzo e-mail

Entità che archivia i metadati di configurazione per i campi di tipo Indirizzo e-mail

## Identity

| Property | Value |
| --- | --- |
| Logical name | `emailaddressconfiguration` |
| Display name | Configurazione indirizzo e-mail |
| Display (plural) | Configurazioni indirizzo e-mail |
| Schema name | `EmailAddressConfiguration` |
| Entity set (Web API) | `emailaddressconfigurations` |
| Primary id attribute | `emailaddressconfigurationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/emailaddressconfigurations?$select=name&$top=10
GET /api/data/v9.2/emailaddressconfigurations(<guid>)
POST /api/data/v9.2/emailaddressconfigurations
PATCH /api/data/v9.2/emailaddressconfigurations(<guid>)
DELETE /api/data/v9.2/emailaddressconfigurations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`attributeid`, `donotresolve`, `emailaddressconfigurationid`, `entityid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_emailaddressconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_emailaddressconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_emailaddressconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_emailaddressconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_emailaddressconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |
| `emailaddressconfiguration_entity_EntityId` | [entity](entity.md) | `entityid` | `EntityId_EmailAddressConfiguration` |
| `emailaddressconfiguration_attribute_AttributeId` | [attribute](attribute.md) | `attributeid` | `AttributeId_EmailAddressConfiguration` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `emailaddressconfiguration_SyncErrors` | [emailaddressconfiguration](emailaddressconfiguration.md) | `regardingobjectid` | `regardingobjectid_emailaddressconfiguration` |
| `emailaddressconfiguration_AsyncOperations` | [emailaddressconfiguration](emailaddressconfiguration.md) | `regardingobjectid` | `regardingobjectid_emailaddressconfiguration` |
| `emailaddressconfiguration_MailboxTrackingFolders` | [emailaddressconfiguration](emailaddressconfiguration.md) | `regardingobjectid` | `regardingobjectid_emailaddressconfiguration` |
| `emailaddressconfiguration_UserEntityInstanceDatas` | [emailaddressconfiguration](emailaddressconfiguration.md) | `objectid` | `objectid_emailaddressconfiguration` |
| `emailaddressconfiguration_BulkDeleteFailures` | [emailaddressconfiguration](emailaddressconfiguration.md) | `regardingobjectid` | `regardingobjectid_emailaddressconfiguration` |
| `emailaddressconfiguration_PrincipalObjectAttributeAccesses` | [emailaddressconfiguration](emailaddressconfiguration.md) | `objectid` | `objectid_emailaddressconfiguration` |


## Source

Generated from [emailaddressconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='emailaddressconfiguration')) on 2026-05-07.