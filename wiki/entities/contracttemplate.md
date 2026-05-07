---
logical: "contracttemplate"
display: "Contract Template"
entitySetName: "contracttemplates"
primaryId: "contracttemplateid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Contract Template

Template for a contract containing the standard attributes of a contract.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `contracttemplate` |
| Display name | Contract Template |
| Display (plural) | Contract Templates |
| Schema name | `ContractTemplate` |
| Entity set (Web API) | `contracttemplates` |
| Primary id attribute | `contracttemplateid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/contracttemplates?$select=name&$top=10
GET /api/data/v9.2/contracttemplates(<guid>)
POST /api/data/v9.2/contracttemplates
PATCH /api/data/v9.2/contracttemplates(<guid>)
DELETE /api/data/v9.2/contracttemplates(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`Abbreviation`, `AllotmentTypeCode`, `BillingFrequencyCode`, `ContractServiceLevelCode`, `ContractTemplateId`, `Description`, `EffectivityCalendar`, `ImportSequenceNumber`, `IntroducedVersion`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UseDiscountAsPercentage`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentState`, `ContractTemplateIdUnique`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_contracttemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_contracttemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_contracttemplatebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_contracttemplatebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_contract_templates` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contract_template_contracts` | _n/a_ | `contracttemplateid` | _n/a_ |
| `ContractTemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ContractTemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contracttemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contracttemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `ContractTemplate_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ContractTemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [contracttemplate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/contracttemplate.md) on 2026-05-06.